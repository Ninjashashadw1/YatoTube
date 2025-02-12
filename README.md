# 🎯 YatoTube

### 🚀 O Melhor Downloader de YouTube

[![npm version](https://img.shields.io/npm/v/yatotube.svg?style=for-the-badge&color=blue)](https://www.npmjs.com/package/yatotube)

*Criado por [@NinjaShadow](https://github.com/Ninjashashadw1)*  

---

## ✨ Recursos Principais

- 🔍 **Pesquisa no YouTube** – Busque vídeos rapidamente  
- 🎵 **Download de Áudio** – Qualidade até **320kbps**  
- 🎥 **Download de Vídeo** – Suporte até **1080p**  
- ⚡ **Rápido e Eficiente** – Downloads otimizados  
- 📜 **Transcrição de Vídeos** – Obtenha legendas automáticas  

---
---
## 🚀 Instalação

Instale o **YatoTube** no seu projeto usando npm, yarn ou pnpm:  

```bash
# Usando npm
npm install yatotube

# Usando yarn
yarn add yatotube

# Usando pnpm
pnpm add yatotube
---
```
## 📖 Como Usar  

### 🔍 Pesquisar Vídeos no YouTube  

```javascript
const { searchYouTube } = require("yatotube");

(async () => {
    const search = await searchYouTube("Nome da música ou vídeo");
    console.log(search);
})();
```
## 🛸🛸 Exemplo da resposta 

```json
{
  "status": true,
  "creator": "@NinjaShadow/YatoTube",
  "results": [
    {
      "title": "Nome do vídeo",
      "url": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
      "thumbnail": "https://i.ytimg.com/vi/XXXXXXXXXXX/hqdefault.jpg",
      "views": 123456,
      "timestamp": "3:45",
      "ago": "2 dias atrás"
    }
  ]
}
```
## 🎵Baixar Áudio (MP3)

```javascript 
const { downloadMP3 } = require("yatotube");

(async () => {
    const audio = await downloadMP3("https://youtu.be/O2QiUN-7Rjw", 320);
    console.log(audio);
})();

## 🛸🛸 Exemplo da resposta 
```
```json
{
  "status": true,
  "creator": "@NinjaShadow/YatoTube",
  "metadata": {
    "url": "https://youtu.be/O2QiUN-7Rjw",
    "id": "O2QiUN-7Rjw"
  },
  "download": {
    "status": true,
    "quality": "320kbps",
    "availableQuality": ["92", "128", "256", "320"],
    "url": "https://cdn.savetube.me/download/audio/O2QiUN-7Rjw-320.mp3",
    "filename": "Nome do Vídeo (320kbps).mp3"
  }
}   
```
## 📽Baixar vídeo (MP4)

```javascript 

const { downloadMP4 } = require("yatotube");

(async () => {
    const video = await downloadMP4("https://youtu.be/O2QiUN-7Rjw", 720);
    console.log(video);
})();
```
## 🛸🛸 Exemplo da resposta 

```json
{
  "status": true,
  "creator": "@NinjaShadow/YatoTube",
  "metadata": {
    "url": "https://youtu.be/O2QiUN-7Rjw",
    "id": "O2QiUN-7Rjw"
  },
  "download": {
    "status": true,
    "quality": "720p",
    "availableQuality": ["144", "360", "480", "720", "1080"],
    "url": "https://cdn.savetube.me/download/video/O2QiUN-7Rjw-720.mp4",
    "filename": "Nome do Vídeo (720p).mp4"
  }
}
```
## 📜 Transcrição (Legenda)

```javascript 

const { fetchTranscript } = require("yatotube");

(async () => {
    const transcript = await fetchTranscript("https://youtu.be/O2QiUN-7Rjw");
    console.log(transcript);
})();

## 🛸🛸 Exemplo da resposta 
```
```json

{
  "status": true,
  "creator": "@NinjaShadow/YatoTube",
  "transcript": "Aqui está a transcrição completa do vídeo..."
}

## ⚠️ Tratamento de erros

caso link seja inválido ou ocorra um erro no servidor, a resposta terá status: false.
```
```javascript
try {
    const audio = await downloadMP3("https://youtu.be/O2QiUN-7Rjw", 320);
    console.log(audio);
} catch (error) {
    console.error("Erro ao baixar:", error.message);
} 

## 🛸🛸 Exemplo da resposta 
```
```json

{
  "status": false,
  "message": "Invalid YouTube URL"
}
```
## 📊 Qualidade Suportada

### 🎵 Qualidade de Áudio

```md
| Código | Qualidade |
|--------|-----------|
| 92     | 92kbps   |
| 128    | 128kbps  |
| 256    | 256kbps  |
| 320    | 320kbps  |
| Código | Resolução |

### 🎵 Qualidade de Áudio
```
```md
|--------|-----------|
| 144    | 144p     |
| 360    | 360p     |
| 480    | 480p     |
| 720    | 720p     |
| 1080   | 1080p    |
```
## 💖 Apoie o Projeto  

Se você gostou do **YatoTube** e quer ajudar no desenvolvimento contínuo, considere apoiar de alguma forma:  

### ⭐ Dê uma estrela no GitHub  
Apoie o projeto dando uma ⭐ no repositório! Isso ajuda muito na visibilidade e no crescimento da ferramenta.  

[![GitHub Repo Stars](https://img.shields.io/github/stars/Ninjashashadw1/YatoTube?style=for-the-badge&color=yellow)](https://github.com/Ninjashashadw1/YatoTube)  

### ☕ Me pague um café  
Se quiser contribuir financeiramente, entre em contato comigo pelo WhatsApp:  
[![WhatsApp](https://img.shields.io/badge/WhatsApp-258847210337-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/258847210337)  

### 📢 Compartilhe o projeto  
Divulgue o **YatoTube** para amigos, grupos e redes sociais. Isso ajuda bastante no crescimento do projeto!  

Agradeço a todos que apoiam e tornam possível continuar melhorando essa ferramenta. 🚀🔥
