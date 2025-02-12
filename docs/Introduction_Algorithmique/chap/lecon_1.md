# 📌 Leçon 1 : Qu'est-ce que l'algorithmique ?

## 🧠 Définition d'un algorithme
Un **algorithme** est une suite finie et ordonnée d'instructions permettant de résoudre un problème. Il peut être appliqué :
- 📌 **En informatique** : tri, recherche, traitement de données.
- 📌 **Dans des domaines non numériques** : recettes de cuisine, instructions de montage, casse-tête.

---

## 📜 Origine du terme
Le mot **algorithme** vient du nom du mathématicien perse **Al-Khwârizmî** (IXe siècle). Son ouvrage sur les mathématiques et l'algèbre a posé les bases de la logique algorithmique.

---

## 🎯 Pourquoi apprendre l'algorithmique ?
Maîtriser l’algorithmie est essentiel pour :
✅ Améliorer **la logique** et la capacité d’analyse.  
✅ Comprendre et optimiser **la complexité** des programmes.  
✅ Connaître les **structures de données** et savoir les utiliser.  
✅ Mieux exploiter les ressources limitées d’un ordinateur (CPU et mémoire).  

---

# 💾 Ressources d’un ordinateur

Les **ressources d’un ordinateur** sont limitées, principalement en :
- **⏳ Temps de calcul** (processeur - CPU)
- **🗄️ Espace mémoire** (RAM)

Nous allons explorer ces composants pour mieux comprendre **les complexités en temps et en espace** des algorithmes.

---

## 🛠️ La mémoire vive (RAM)
> **RAM** = *Random Access Memory*

La RAM est utilisée comme **mémoire à court terme** pour stocker temporairement des données accessibles **rapidement** par le processeur.  
📌 **Temps d’accès comparatif :**
- **RAM** : 🔥 Nanoseconde *(10⁻⁹ sec)*
- **SSD NVMe** : ⚡ Microseconde *(10⁻⁶ sec)*
- **Disque dur** : 🐢 Milliseconde *(10⁻³ sec)*

💡 **Propriétés de la RAM :**
- 🏎️ Accès rapide et aléatoire aux données (*random access*).
- 🕒 Volatile (*perte des données en cas de coupure*).
- 📦 Organisée en **tableaux de cellules mémoires** (chaque cellule stocke un bit - `0` ou `1`).
- 🧑‍💻 Mémoire **adressable par octets** *(1 octet = 8 bits)*.

---

## ⚙️ Le processeur (CPU)
> **CPU** = *Central Processing Unit*

Le **processeur** exécute les **calculs** et exécute les **instructions** du programme. Il est connecté à la RAM via un **bus de communication**.

💡 **Types d’instructions :**
- 📥 **Accès mémoire** : Lecture/écriture de données.
- ➕ **Opérations arithmétiques** : Additions, multiplications, divisions.
- 🔀 **Opérations logiques** : `ET`, `OU`, `NON`, comparaisons.
- 🔄 **Contrôles** : Boucles, conditions (`if`, `while`, `for`).

🕒 **Fréquence du CPU** :
- Un CPU exécute des **instructions synchronisées** par une **horloge interne**.
- **Mesurée en Hertz (Hz)** → 1 GHz = 1 milliard d’instructions/sec.
- 🖥️ Aujourd’hui, les processeurs sont **multicœurs** et optimisés avec des **unités spécialisées** (ex. : prédiction de branchement, SIMD).

---

## 🔍 Architecture du CPU

Un CPU est composé de plusieurs **unités fonctionnelles** :

### 🔹 **1. Unité d’instruction**
🔄 Gère l’exécution des instructions.
- 📌 **Séquenceur** : Synchronisation avec l’horloge.
- 📌 **Compteur de programme** : Stocke l’adresse de l’instruction en cours.
- 📌 **Registre d’instruction** : Contient l’instruction en cours.

### 🔹 **2. Unité d'exécution**
💡 Effectue les opérations de calcul.
- ➗ **Unité arithmétique et logique (ALU)** : Calculs sur les entiers et opérateurs logiques.
- 🔢 **Unité de virgule flottante (FPU)** : Calculs sur les nombres décimaux.
- 📝 **Registre d’état** : Stocke l’état du CPU.
- 🏗️ **Registre accumulateur** : Stocke les résultats des calculs.

### 🔹 **3. Unité de gestion des bus**
📤 📥 Gère les échanges de données avec la **mémoire RAM**.

---

## ⚡ Mémoire cache et registres
📌 **Registres** :  
- 📍 Petites mémoires ultra-rapides situées **dans le processeur**.  
- 📈 Stockent les **données immédiates** et les résultats intermédiaires.

📌 **Mémoire cache** :  
- **Intermédiaire entre la RAM et le CPU** pour accélérer les accès aux données.
- 🎯 Stocke les **données fréquemment utilisées** pour réduire les temps d'attente.

---

## 🏁 Conclusion
L’algorithmique et l’architecture matérielle sont **indissociables** en informatique :
- **💡 Une bonne compréhension des algorithmes permet d’écrire du code efficace.**
- **🚀 Une bonne connaissance du matériel permet d’optimiser l’exécution des algorithmes.**

