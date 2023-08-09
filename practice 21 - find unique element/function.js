function findUnique (a) {
    
    for (let i = 0; i < a.length; i++) {

        for (let j = i + 1; j < a.length; j++) {

            if (a[i]===a[j]) {
                a.splice(j,1);
                a.splice(i,1);
                j-=2;
                i-=2;
                
            }
        }
    }

    return a;
    
}