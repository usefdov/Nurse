# رفع المشروع على GitHub من الآيباد

هذه النسخة تحتوي على ملفات المشروع في شكلها الصحيح.

## مهم
عند فك ضغط الملف، لا ترفع فولدر `youssef-github-upload` نفسه داخل Repository.
ادخل إليه ثم ارفع **كل الملفات والمجلدات الموجودة بداخله** إلى جذر الـRepository.

يجب أن يكون شكل Repository النهائي:

app/
public/
package.json
postcss.config.mjs
tailwind.config.ts
tsconfig.json
next-env.d.ts

ولا تضع المشروع داخل مجلد إضافي مثل:
youssef-github-upload/app/

## الملفات داخل app
- app/page.tsx
- app/layout.tsx
- app/globals.css

## بعد الرفع
اربط Repository بـ Vercel وسيكتشف Next.js و`package.json` تلقائيًا.
