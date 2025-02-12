# 🎯 Leçon 4 : La notion de Grand O

## 🚀 Mesurer l'efficacité d'un algorithme

Au premier abord, on pourrait penser que pour mesurer la performance d'un algorithme, il suffit de mesurer le **temps d'exécution**. ❌ Cependant, le temps dépend de plusieurs paramètres :

- 📌 **Langage d'implémentation**
- 💻 **Ressources de la machine** (RAM / CPU)
- 📊 **Grandeur des données en entrée**

💡 Il est donc préférable d'évaluer la **complexité d'un algorithme** en fonction de la **taille des données** et du **nombre d'opérations** effectuées.

### 📌 Deux types de complexités :

1️⃣ **Complexité spatiale** 🧠 → Mesure l’utilisation de la **mémoire vive**.  
2️⃣ **Complexité temporelle** ⏳ → Mesure la **vitesse d’exécution**.

---

## ⏳ La complexité temporelle d'un algorithme

L'objectif est de pouvoir **comparer plusieurs algorithmes** pour résoudre un problème et comprendre leur **évolution** lorsque les **données en entrée deviennent très grandes**. 

🔹 On note généralement **n** le nombre de données à traiter.  
🔹 On cherche à déterminer la **borne supérieure** de notre algorithme.  

---

## 🔢 La notation Big O (Grand O)

La **notation Big O** (ou **symbole de Landau**) permet de **décrire le comportement asymptotique** des fonctions. Elle permet d'évaluer **la rapidité avec laquelle une fonction augmente** en fonction de **n**.

📌 **Règles principales :**
- **On ignore les constantes et coefficients**, car à **grande échelle**, ils ont **peu d'impact**.
- **On considère toujours le pire cas** (Worst-case complexity).

💡 Exemple :  
Si un algorithme nécessite **4n² - 2n + 2** opérations dans le pire cas, alors sa complexité est **O(n²)**, car **on simplifie** en gardant le terme **dominant**.

---

## 📈 Les classes de complexité les plus courantes

| Notation  | Nom                         | Exemples d'algorithmes |
|-----------|-----------------------------|------------------------|
| **O(1)**  | Constante ⚡                 | Accès à un élément d’un tableau |
| **O(log n)** | Logarithmique 📉          | Recherche dichotomique |
| **O(n)**  | Linéaire 📊                  | Recherche séquentielle |
| **O(n log n)** | Quasi-linéaire 🔥       | Algorithmes de tri efficaces (Merge Sort, Quick Sort) |
| **O(n²)** | Quadratique 🛑               | Tri par sélection, Tri à bulles |
| **O(n³)** | Cubique 🚨                   | Algorithmes de multiplication de matrices |
| **O(2ⁿ)** | Exponentielle ❌              | Problème du voyageur de commerce |
| **O(n!)** | Factorielle ⚠️               | Backtracking (ex: problème du sac à dos) |

📌 **Relation des croissances :**  
_1 < log n < √n < n < n log n < n² < n³ < ... < 2ⁿ < 3ⁿ < ... < n!_

---

## 🔍 Exemples concrets

### 🔹 **Recherche séquentielle (O(n))**
Dans le pire cas, l'élément recherché est le dernier du tableau, nécessitant **n opérations**.

### 🔹 **Recherche dichotomique (O(log n))**
Si nous avons un tableau **trié** de taille **n**, chaque itération divise la fenêtre de recherche par 2 :

```
n1 = n / 2  
n2 = n1 / 2  
n3 = n2 / 2  
...
```
🔹 Résultat : **Complexité = O(log n)** (logarithmique).

---

## 🔥 Exemples de boucles et leur complexité

📌 **Complexité linéaire (O(n))**  
```js
for (let i = 0; i < n; i++) {
  console.log(i);
}
```

📌 **Complexité logarithmique (O(log n))**  
```js
for (let i = 1; i < n; i *= 2) {
  console.log(i);
}
```

📌 **Complexité quadratique (O(n²))**  
```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

---

## ✅ Récapitulatif

💡 **Ce qu'il faut retenir** :
- **Big O** permet de mesurer **l’évolution du temps d’exécution** selon **la taille des entrées**.
- **On garde uniquement le terme dominant**, et on **ignore les constantes**.
- **Plus la complexité est basse, plus l’algorithme est efficace !** 🚀