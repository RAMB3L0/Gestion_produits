# 📦 Django Product CRUD

Application web de gestion de produits développée avec **Django**. Ce projet permet d'effectuer les opérations CRUD (*Create, Read, Update, Delete*) sur une base de données de produits via une interface utilisateur simple et intuitive.

## 🚀 Fonctionnalités

* ➕ Ajouter un produit
* 📋 Afficher la liste des produits
* 🔍 Rechercher un produit par :

  * Nom
  * Catégorie
  * Description
* ✏️ Modifier un produit existant
* 🗑️ Supprimer un produit
* 💬 Messages de confirmation après chaque opération
* 📦 Gestion du stock
* 💰 Gestion du prix des produits

---

## 🛠️ Technologies utilisées

* Python 3
* Django 5.x
* SQLite3
* HTML5
* CSS3
* JavaScript

---

## 📂 Structure du projet

```text
django-product-crud-project/
│
├── manage.py
├── db.sqlite3
├── requirements.txt
│
├── product_manager/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── products/
│   ├── models.py
│   ├── views.py
│   ├── forms.py
│   ├── urls.py
│   └── migrations/
│
├── templates/
│   └── products/
│       ├── product_list.html
│       ├── product_form.html
│       └── product_confirm_delete.html
│
└── static/
    └── products/
        └── app.js
```

---

## 🗃️ Modèle de données

### Product

| Champ       | Type                 | Description           |
| ----------- | -------------------- | --------------------- |
| name        | CharField            | Nom du produit        |
| category    | CharField            | Catégorie             |
| description | TextField            | Description           |
| price       | DecimalField         | Prix                  |
| stock       | PositiveIntegerField | Quantité en stock     |
| created_at  | DateTimeField        | Date de création      |
| updated_at  | DateTimeField        | Dernière modification |

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/votre-compte/django-product-crud.git
cd django-product-crud-project
```

### 2. Créer un environnement virtuel

Linux / macOS :

```bash
python3 -m venv venv
source venv/bin/activate
```

Windows :

```bash
python -m venv venv
venv\Scripts\activate
```

### 3. Installer les dépendances

```bash
pip install -r requirements.txt
```

### 4. Appliquer les migrations

```bash
python manage.py migrate
```

### 5. Lancer le serveur

```bash
python manage.py runserver
```

### 6. Accéder à l'application

```text
http://127.0.0.1:8000/
```

---

## 🔎 Fonctionnement de la recherche

L'application permet de rechercher dynamiquement des produits selon :

* Le nom du produit
* La catégorie
* La description

La recherche utilise les requêtes Django ORM avec les opérateurs :

```python
Q(name__icontains=query)
Q(category__icontains=query)
Q(description__icontains=query)
```

---

## 📈 Perspectives d'amélioration

* Authentification des utilisateurs
* Gestion des rôles (Administrateur, Gestionnaire)
* Tableau de bord statistique
* Pagination des produits
* Export PDF
* Export Excel / CSV
* Import CSV
* Gestion des fournisseurs
* Historique des modifications
* API REST avec Django REST Framework
* Interface responsive avancée
* Gestion des images produits
* Alertes de stock faible

---

## 🎯 Objectifs pédagogiques

Ce projet a été réalisé afin de :

* Maîtriser l'architecture MVT de Django
* Manipuler les modèles et migrations
* Utiliser les formulaires Django
* Effectuer des opérations CRUD complètes
* Mettre en œuvre la recherche avec Django ORM
* Concevoir une application web de gestion simple et fonctionnelle

---

## 👨‍💻 Auteur

Projet académique développé dans le cadre de l'apprentissage du framework Django et du développement d'applications web de gestion.
