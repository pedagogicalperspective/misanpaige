# MisanpAIge

**Yapay Zeka Destekli Akademik Yazım Platformu**  
*AI-Powered Academic Writing Platform*

[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-2e5c3e?style=flat-square)](https://misanpaige.github.io/misanpaige)
[![License](https://img.shields.io/badge/license-MIT-4db87a?style=flat-square)](LICENSE)
[![Anthropic](https://img.shields.io/badge/powered%20by-Claude%20API-1a1814?style=flat-square)](https://anthropic.com)

---

Misanpaj, kaynak yönetimi, şablon oluşturma ve uyumluluk denetimi — akademik yazımın tüm teknik yükünü kaldıran yapay zeka platformu.

*Layout formatting, citation management, template creation and compliance checking — AI that removes every technical burden from academic writing.*

## Araçlar / Tools

| # | Araç / Tool | Açıklama / Description |
|---|-------------|------------------------|
| 01 | **Mizanpaj & Dizgi** / Layout | Şablonu çalışmaya uygula · Apply template to manuscript |
| 02 | **Kaynak Düzenleyici** / Citations | 8 stilde metin içi + kaynakça · In-text + bibliography in 8 styles |
| 03 | **Şablon Oluşturucu** / Template Builder | Dergi şablonu oluştur · Create journal template |
| 04 | **Uyumluluk Denetçisi** / Compliance | Dergi kurallarına uyum skoru · Compliance score |
| 05 | **Toplu İşlem** / Batch *(yakında / coming soon)* | N dergiye eş zamanlı dönüşüm |

## Kurulum / Setup

Bu proje tek bir HTML dosyasıdır — hiçbir build adımı, bağımlılık veya sunucu gerekmez.  
*This project is a single HTML file — no build step, dependencies or server required.*

### 1. GitHub Pages ile Yayınla / Deploy with GitHub Pages

```
1. Bu repoyu fork'layın veya klonlayın
2. Settings → Pages → Source: main branch / root
3. https://<kullanıcı-adı>.github.io/<repo-adı> adresinden erişin
```

### 2. Yerel Kullanım / Local Use

```bash
git clone https://github.com/misanpaige/misanpaige.git
cd misanpaige
# index.html dosyasını tarayıcıda açın / open index.html in browser
```

### 3. API Anahtarı / API Key

MisanpAIge, Anthropic Claude API'yi kullanır. Çalıştırmak için:

1. [console.anthropic.com](https://console.anthropic.com) adresinden API anahtarı alın
2. Sağ üst köşedeki **API Anahtarı** butonuna tıklayın
3. Anahtarınızı girin → tarayıcınızda (`localStorage`) saklanır, hiçbir sunucuya gönderilmez

*MisanpAIge uses the Anthropic Claude API. Get your key at [console.anthropic.com](https://console.anthropic.com) and enter it via the API Key button — stored only in your browser.*

## Desteklenen Atıf Stilleri / Citation Styles

`APA 7` · `APA 6` · `Chicago 17` · `IEEE` · `MLA 9` · `Vancouver` · `Harvard` · `Turabian`

## Desteklenen Formatlar / File Formats

Giriş / Input: `.pdf` · `.docx` · `.txt` · `.md` · `.tex`  
Çıkış / Output: `Markdown` · `Plain Text` · `LaTeX`

## Teknik Notlar / Technical Notes

- **Saf HTML/CSS/JS** — framework yok, build yok
- **DOCX okuma**: [mammoth.js](https://github.com/mwilliamson/mammoth.js) (CDN)
- **PDF okuma**: Anthropic native document API
- **API çağrısı**: Doğrudan tarayıcıdan Anthropic'e — `anthropic-dangerous-direct-browser-access: true` header'ı ile
- **Veri gizliliği**: Hiçbir dosya sunucuya yüklenmez. API anahtarı yalnızca `localStorage`'da saklanır.

## Marka / Brand

**MisanpAIge** — üç katmanlı bir isim:
- Türkçe *mizanpaj* (sayfa düzeni, dizgi)
- Fransızca *mise en page* (sayfa düzeni)
- Gömülü **AI** + İngilizce *page*

Logo imleci (`│`) 1.1s `step-end` animasyonuyla yanıp söner — bir metin editörünün imlecini simgeler.

## Renk Paleti / Color Palette

| Token | Renk | Kullanım |
|-------|------|----------|
| `--ink` | `#1a1814` | Ana arka plan |
| `--accent` | `#2e5c3e` | Forest Green — tek aksiyon rengi |
| `--ai` | `#4db87a` | AI Green — logo + cursor |
| `--gold` | `#8a6c2a` | Kurumsal plan |
| `--bg` | `#faf8f4` | Sayfa arka planı |

## Lisans / License

MIT — Bkz. [LICENSE](LICENSE)

## İletişim / Contact

- GitHub Issues: Hata bildirimi / bug reports
- [misanpaige.com](https://misanpaige.com) *(yakında / coming soon)*

---

*Akademik yazarların zamanını geri veren yapay zeka destekli dizgi platformu.*  
*The AI-powered typesetting platform that gives academic authors their time back.*
