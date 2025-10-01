## Infofluencer

### Projeyi nasıl çalıştırırım?

Gereksinimler: Node.js 18+ ve npm.

1. Bağımlılıkları yükleyin:

```bash
npm install
```

2. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

3. Üretim için derleyin ve başlatın:

```bash
npm run build
npm start
```

### Hangi teknolojileri kullandınız?

- Next.js 15 (App Router)
- React 19, TypeScript
- Tailwind CSS 4, PostCSS
- Radix UI (Dropdown, Label)
- Yardımcı araçlar: class-variance-authority, tailwind-merge, clsx
- Lucide React ikonları
- Framer Motion animasyonları
- Recharts ile grafikler
- Sonner bildirimleri

### Tasarım tercihleri (2–3 madde)

- Bileşen tabanlı ve yeniden kullanılabilir UI: Radix primitives ve yardımcı util'lerle tutarlı arayüzler.
- Utility-first yaklaşım: Tailwind ile hızlı prototipleme, tutarlı boşluk/typografi ölçekleri.
- Erişilebilirlik önceliği: Klavye ve ekran okuyucu dostu menüler/etkileşimler (Radix tabanlı).
