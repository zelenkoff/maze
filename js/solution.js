(function (root) {
    var EMPTY = root.maze.EMPTY;
    var WALL = root.maze.WALL;
    var PATH = root.maze.PATH;
    var CURRENT = root.maze.CURRENT;


    var xc = 1 ,yc = 1 , N, i, dx = [1,0,-1,0], dy=[0,-1,0,1];
    /**
     * Функция находит путь к выходу и возвращает найденный маршрут
     *
     * @param {number[][]} maze карта лабиринта представленная двумерной матрицей чисел
     * @param {number} x координата точки старта по оси X
     * @param {number} y координата точки старта по оси Y
     * @returns {[number, number][]} маршрут к выходу представленный списоком пар координат
     */
    function solution(maze, a, b) {
        var i,
            N=1,
            NoSolution;
        var width = maze[0].length;
          var height = maze.length;

          var mark = matrixArray(height, width);
            var x, y;

      mark[0][1] = 1;
            do {
                NoSolution = true;
            for ( x = 0; x < height; x++) {
                for (y = 1; y < width; y++) {
                    if (mark[x][y] == N) {
                        for (i = 0; i < 4; i++) {
                            if (CanGO(x, y, dx[i], dy[i]) && (mark[x + dx[i]][ y + dy[i]] == 0)) {
                                NoSolution = false;
                                mark[x + dx[i]][y + dy[i]] = N + 1;
                            } 
                           
                        }
                    }
                } 
            }
            N = N + 1;
            } while(!NoSolution);
            console.log(mark);
            console.log("N  =  " + N)
            console.log(xc + "  " + yc);
        return [
            [1, 0],
            [xc, yc] 

        ];

        function CanGO(x, y, dx, dy) {

          try{
                if (dx == -1){
                    return maze[x + dx][y] != WALL;
                } else if (dx == 1){
                    return maze[x + dx][y] != WALL;
                } else if (dy == -1){
                    return maze[x][y + dy] != WALL;
                } else if (dy == 1){
                    return maze[x][y + dy] != WALL;
                }
          } catch (err){

             xc = y;
              yc = x;

          }
        }

        function matrixArray(rows,columns){
          var arr = [];
          for(var i=0; i<rows; i++){
            arr[i] = [];
            for(var j=0; j<columns; j++){
              arr[i][j] = 0;
            }
          }
          return arr;
        }
    }

    root.maze.solution = solution;
})(this);
