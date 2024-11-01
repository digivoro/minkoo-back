# Minkoo Logical Data Model

```mermaid
erDiagram
  COMMUNITIES }|--o{ USERS : "belong to"
  COMMUNITIES ||--o{ PROJECTS : "develop"
  COMMUNITIES |o--o{ MARKETS : "host"
  COMMUNITIES }o--o{ ANUNCIOS : "display"
  USERS }|--o{ PROJECTS : "participate in"
  USERS }|--o{ MARKETS : "participate in"
  USERS ||--o{ ANUNCIOS : "post"
  MARKETS }o--o{ ANUNCIOS : "display"
```
