function solution(n) {
    let tre = "";
    let tre_count = 0;
    let answer_count = 0;
    let answer_tre = "";
    var answer = n;

    while (n !== 0) {
        tre += n % 2;
        n = Math.floor(n / 2);
    }
    tre = parseInt(tre);

    while (1) {
        if (answer > n) {
            while (answer !== 0) {
                answer_tre += n % 2;
                answer = Math.floor(answer / 2);
            }
            answer_tre = parseInt(answer_tre);

            for(let i = 0; i < tre; i++){
                if(tre[i]==1){
                    tre_count++;
                }
            }

            for (let i = 0; i < answer_tre; i++) {
                if (tre[i] == 1) {
                    answer_count++;
                }
            }

            if(answer_count == tre_count){
                return answer
                break;
            } else{
                answer++;
            }
        } else {
            answer++;
        }
    }

    return answer;
}
