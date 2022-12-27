// Exercice 1
            const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];


            // 1) Supprimez Banana de la baie.


            fruits.splice(0,1);

            // 2)Triez le tableau par ordre alphabétique.

            fruits.sort();



            //3) Ajoutez "Kiwi" à la fin du tableau.

            fruits.push("Kiwi");

            // 4) Supprimez "Apples" du tableau. N'utilisez pas la même méthode que dans la partie 1.

            fruits.shift()

            // 5) Triez le tableau dans l'ordre inverse. (Pas alphabétique, mais inversez le tableau actuel, c'est-à-dire que ['a', 'c', 'b'] devient ['b', 'c', 'a'])
            //À la fin, vous devriez voir ce résultat :

            fruits.reverse();
            console.log(fruits)


/* Exercice 2:*/


                const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

                // 1) Accédez puis console.log « Oranges ».
                console.log(moreFruits[1][1])




