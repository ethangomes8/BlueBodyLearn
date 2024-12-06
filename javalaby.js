window.addEventListener("load", function() {
    // Class permettant de creer un labyrinthe;
    var Map = {
        init: function() {
            this.grid = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ["in", 0, 0, 0, 0, 0, 1, 2, 0, 1],
                [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
                [1, 0, 1, 1, 1, 1, 0, 0, 4, 1],
                [1, 0, 3, 1, 0, 0, 0, 1, 1, 1],
                [1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, "out"],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];

            this.pos = [1, 1];
            this.skills = 0; // Compétences acquises
            this.display();
        },

        display: function() {
            var table = document.getElementById("labyrinthe");
            table.innerHTML = ""; // Clear previous content
            for (var y = 0; y < this.grid.length; y++) {
                var row = "<tr>";

                for (var x = 0; x < this.grid[y].length; x++) {
                    if (this.grid[y][x] === 1) {
                        row += '<td bgcolor="darkblue"></td>';
                    } else if (this.grid[y][x] === 2 || this.grid[y][x] === 3 || this.grid[y][x] === 4) {
                        row += '<td><img class="img-circle" src="images/plancton.png" alt="plancton"></td>';
                    } else if (x === this.pos[0] && y === this.pos[1]) {
                        row += '<td><img class="img-circle" src="images/baleine.png" alt="poisson"></td>';
                    } else if (this.grid[y][x] === "in") {
                        row += '<td><i class="fa fa-minus-circle" aria-hidden="true"></i></td>';
                    } else if (this.grid[y][x] === "out") {
                        row += '<td><i class="fa fa-long-arrow-right" aria-hidden="true"></i></td>';
                    } else {
                        row += "<td></td>";
                    }
                }
                row += "</tr>";
                table.insertAdjacentHTML("beforeEnd", row);
            }
        },

        check: function(x, y) {
            if (x < 0 || y < 0 || x > this.grid[0].length - 1 || y > this.grid.length - 1) {
                alert("Déplacement impossible !");
                return [this.pos[0], this.pos[1]];
            } else if (this.grid[y][x] === 1) {
                alert("Déplacement impossible !");
                return [this.pos[0], this.pos[1]];
            } else if (this.grid[y][x] === 2 || this.grid[y][x] === 3 || this.grid[y][x] === 4) {
                this.skills++; // Collecte de plancton
                this.grid[y][x] = 0; // Enlever le plancton de la grille
                this.display();
            } else if (this.grid[y][x] === "out") {
                if (this.skills < 3) {
                    alert("Vous devez collecter tous les planctons avant de sortir !");
                    return [this.pos[0], this.pos[1]];
                } else {
                    alert("Vous avez réussi à sortir du labyrinthe !");
                    window.location.href = 'pageprincipale.html';
                    // Vous pouvez ajouter ici une logique pour redémarrer le jeu ou afficher un message de victoire
                    return [this.pos[0], this.pos[1]];
                }
            }

            // Mettre à jour la position du poisson
            this.pos = [x, y];
            this.display();
            return this.pos;
        },

        move: function(direction) {
            let newPos;
            switch (direction) {
                case 'up':
                    newPos = this.check(this.pos[0], this.pos[1] - 1);
                    break;
                case 'down':
                    newPos = this.check(this.pos[0], this.pos[1] + 1);
                    break;
                case 'left':
                    newPos = this.check(this.pos[0] - 1, this.pos[1]);
                    break;
                case 'right':
                    newPos = this.check(this.pos[0] + 1, this.pos[1]);
                    break;
            }
        }
    };

    // Initialisation du labyrinthe
    Map.init();

    // Gestion des événements de clavier pour déplacer le poisson
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowUp':
                Map.move('up');
                break;
            case 'ArrowDown':
                Map.move('down');
                break;
            case 'ArrowLeft':
                Map.move('left');
                break;
            case 'ArrowRight':
                Map.move('right');
                break;
        }
    });
});