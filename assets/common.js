// ===== بيانات عامة =====
const TEACHER = {
    name: "أحمد زين العابدين",
    nameEn: "Mr. Ahmed Zain Al-Abideen",
    grade: "الرياضيات - الصف السابع",
    lesson: "كتابة المعادلات وحلها"
};

const TIPS = [
    "لحل المعادلة نستخدم العملية العكسية: الطرح عكس الجمع، والقسمة عكس الضرب.",
    "$س + 4 = 11$ ⟵ نطرح 4 من الطرفين ⟵ $س = 7$",
    "$5س = 30$ ⟵ نقسم الطرفين على 5 ⟵ $س = 6$",
    "$س − 2 = 8$ ⟵ نضيف 2 إلى الطرفين ⟵ $س = 10$",
    "$2م + 3 = 13$ ⟵ $2م = 10$ ⟵ $م = 5$",
    "للتحقق: نعوض بقيمة المجهول فى المعادلة الأصلية، مثل: $2 × 5 + 3 = 13$ ✓"
];

// ===== تنسيق النصوص الرياضية =====
// $...$  => معادلة تُكتب من اليمين لليسار كما فى الكتاب
// {a/b}  => كسر رأسى (بسط فوق مقام)
// الأرقام تُعرض بالأرقام العربية (٠١٢٣٤٥٦٧٨٩)
function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fracify(s) {
    return s.replace(/\{([^{}\/]+)\/([^{}]+)\}/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>');
}
const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
function toAr(s) {
    return String(s).replace(/(\d)\.(\d)/g, "$1٫$2").replace(/[0-9]/g, d => AR_DIGITS[d]);
}
function fmt(raw) {
    let s = escapeHtml(raw);
    s = s.replace(/\$([^$]+)\$/g, (m, inner) => '<span class="eq">' + fracify(inner) + '</span>');
    return toAr(s);
}
