class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        for(let i in explorer){
            if(explorer[i].score%5 === 0 && explorer[i].score%3 === 0){
                explorer[i].trick = "FIZZBUZZ";
                return explorer[i];
            }else if(explorer[i].score%5 === 0){
                explorer[i].trick = "BUZZ";
                return explorer[i];
            }else if(explorer[i].score%3 === 0){
                explorer[i].trick = "FIZZ";
                return explorer[i];
            }else{
                explorer[i].trick = explorer[i].score;
                return explorer[i];
            }
        }    
    }
}

module.exports = FizzbuzzService;