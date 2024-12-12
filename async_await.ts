let s: string = "abc";

const check = (s: string): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(s);
        }, 50000);
    });
};

async function fch() {
    try {
        const s1: string = await check(s); 
        console.log(s1);
    } catch (err) {
        console.log("Error", err); 
    }
}

fch();
