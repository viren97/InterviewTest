const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const solve = (input) => {
    const hasAllAlphabet = (sub) => {
        if (!sub || sub.length == 0) return false;
        let cnt = 0;

        let mp = {};
        for (let i = 0; i < alphabet.length; i++) {
            mp[alphabet[i]] = 1;
        }

        for (let i = 0; i < sub.length; i++) {
            if (mp[sub[i]] && mp[sub[i]] === 1) {
                mp[sub[i]] = 0;
                cnt++;
            }
        }

        return cnt === 26;
    };

    let mn = input.length;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            const sub = input.substr(i, i + j + 1);
            if (hasAllAlphabet(sub)) {
                mn = Math.min(sub.length, mn);
            }
        }
    }
    return mn;
};

const input = "FORCESABCDEFDIVGHIJKLMNOPQRSTUVWXYZ";
console.log(solve(input));
