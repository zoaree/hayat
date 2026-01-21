
import { ProductData } from '../types';
import { products } from './index';

export interface RecommendationCriteria {
    age: number;
    occupation: 'soldier' | 'police' | 'civilian';
    policyType: 'individual' | 'corporate';
    corporateGoal?: 'employee_benefits' | 'key_person';
    goal: 'protection' | 'savings_refund';
    budgetPreference: 'fixed_tl' | 'usd';
    durationPreference: '12' | '15' | 'any';
    concerns: ('critical_illness' | 'accident' | 'disability')[];
    familyStatus: 'single' | 'married_kids';
}

export interface RecommendationResult {
    product: ProductData;
    score: number;
    reason: string[];
}

export const recommendProducts = (criteria: RecommendationCriteria): RecommendationResult[] => {
    let results: RecommendationResult[] = products.map(p => ({
        product: p,
        score: 0,
        reason: []
    }));

    // 1. Corporate Logic
    if (criteria.policyType === 'corporate') {
        if (criteria.corporateGoal === 'employee_benefits') {
            // Turuncu Elma is the ONLY choice for employee benefits usually due to tax advantages
            const turuncuElma = results.find(r => r.product.id === 'turuncu-elma');
            if (turuncuElma) {
                turuncuElma.score += 1000;
                turuncuElma.reason.push('Kurumsal: Personel yan hakları için en uygun (Vergi Avantajı).');
            }
        } else if (criteria.corporateGoal === 'key_person') {
            // ROP products are assets, good for Key Person
            results.forEach(r => {
                if (r.product.id.startsWith('rop')) {
                    r.score += 500;
                    r.reason.push('Kurumsal: "Key Person" (Kilit Personel) koruması ve şirket varlığı olarak uygun.');
                }
            });
        }
        // Filter out irrelevant products for corporate if score is low? 
        // Usually only recommend the boosted ones.
        return results.filter(r => r.score > 0).sort((a, b) => b.score - a.score);
    }

    // 2. Individual Logic - Strict Exclusions
    // Turuncu Elma is strictly Corporate in this definition (based on urunler.md line 23 check)
    // "Turuncu Elma Hayat Sigortası'nda Sigorta Ettiren yalnızca tüzel kişiler olabilmektedir."
    results = results.filter(r => r.product.id !== 'turuncu-elma');

    // 3. Occupation Check (Strict)
    if (criteria.occupation === 'soldier') {
        results.forEach(r => {
            if (r.product.id.includes('guvencem-mehmedim')) {
                r.score += 2000;
                r.reason.push('Meslek: TSK mensupları için özel olarak tasarlanmıştır.');
            }
        });
    } else if (criteria.occupation === 'police') {
        results.forEach(r => {
            if (r.product.id.includes('yigit-boruler')) {
                r.score += 2000;
                r.reason.push('Meslek: Emniyet mensupları için özel olarak tasarlanmıştır.');
            }
        });
    }

    // 4. Age Validation (Strict ROP Check)
    // "Giriş Yaşı + Süre <= 75"
    results = results.filter(r => {
        // If it's a ROP product (or Mehmedim/Yiğit which follow similar rules)
        // We need to parse duration from product or assume based on ID/Summary.
        // Most products have duration logic.
        // For simplicity, we check specific ROP constraints if available.

        // We can assume strict check:
        // If we want 12 years: Age + 12 <= 75 => Age <= 63.
        // If we want 15 years: Age + 15 <= 75 => Age <= 60.

        // If duration preference is 'any', we check if AT LEAST ONE duration fits?
        // Or we filter out products that CANNOT be sold at this age.

        // Default assumption: All main ROPs are 12 or 15.
        // If Age > 63, basically all standard 12-year ROPs are out.
        if (criteria.age > 63) {
            // Can't buy standard 12 year ROP.
            // Maybe some special products?
            // Note: Turuncu Elma was filtered out.
            // For now, let's keep it simple: filter if impossible.
            if (r.product.id.startsWith('rop')) return false;
            if (r.product.id.startsWith('yigit')) return false;
            if (r.product.id.startsWith('guvencem')) return false;
        } else if (criteria.age > 60) {
            // Can only buy 12 year versions.
            // If criteria.durationPreference is '15', then this product (if only 15) is invalid.
            if (criteria.durationPreference === '15') return false;
        }
        return true;
    });

    // 5. Goal Branching
    if (criteria.goal === 'savings_refund') {
        results.forEach(r => {
            if (r.product.id.includes('rop') || r.product.id.includes('guvencem') || r.product.id.includes('yigit')) {
                r.score += 100;
                r.reason.push('Beklenti: Prim iadeli (ROP) özelliği.');
            }
            // High Refund Interest -> Azalan
            if (r.product.id.includes('azalan')) {
                // If budget allows? Azalan offers 120-130% refund.
                r.score += 50;
                r.reason.push('Ekstra İade: %120-%130 iade potansiyeli.');
            }
        });
    } else {
        // Protection only?
        // Since Turuncu Elma is corporate only, maybe Standard ROP is the fallback
        // but strictly speaking, we don't have a purely risk product for individuals in this list
        // other than ROPs which cover risk.
        // So ROP is still the best choice, but maybe prioritize high coverage ones.
        results.forEach(r => {
            if (r.product.id.includes('rop') && !r.product.id.includes('karma')) {
                r.score += 50;
                r.reason.push('Yüksek Koruma: Dolar bazlı yüksek vefat teminatı.');
            }
        });
    }

    // 6. Budget / Currency Preference
    if (criteria.budgetPreference === 'fixed_tl') {
        results.forEach(r => {
            if (r.product.id.includes('karma')) {
                r.score += 150;
                r.reason.push('Bütçe: Sabit Kur (Karma) ile kur riskinden korur.');
            } else {
                r.score -= 50; // Penalize USD products if user wants Fixed TL
            }
        });
    } else {
        // USD Preference
        results.forEach(r => {
            if (!r.product.id.includes('karma')) {
                r.score += 50;
                r.reason.push('Bütçe: Dolar bazlı birikim ve koruma.');
            }
        });
    }

    // 7. Concerns
    if (criteria.concerns.includes('critical_illness')) {
        results.forEach(r => {
            if (r.product.id.includes('kritik')) {
                r.score += 200;
                r.reason.push('Kapsam: Kritik Hastalıklar teminatı içerir.');
            }
        });
    }
    if (criteria.concerns.includes('accident')) {
        results.forEach(r => {
            if (r.product.id.includes('ferdi-kaza') && !r.product.id.includes('maluliyet')) { // Pure Ferdi Kaza
                r.score += 150;
                r.reason.push('Kapsam: Kaza sonucu vefat durumunda çift tazminat (2x).');
            }
        });
    }
    if (criteria.concerns.includes('disability')) {
        results.forEach(r => {
            if (r.product.id.includes('maluliyet')) {
                r.score += 200;
                r.reason.push('Kapsam: Tam ve Daimi Maluliyet koruması.');
            }
        });
    }

    // 8. Family Status
    if (criteria.familyStatus === 'married_kids') {
        // Prefer high protection or products with "80+X" where X is support?
        // Or maybe ROP 80+50 products if they exist (Azalan usually good for refund, not necessarily coverage).
        // Let's generic boost:
        results.forEach(r => {
            if (r.product.id.includes('80-50') || r.product.id.includes('80-40')) {
                // Maybe boost slightly for "future planning" aspect
                r.score += 20;
            }
        });
    }

    // Sort by score
    return results
        .filter(r => r.score > 0)
        .sort((a, b) => b.score - a.score);
};
