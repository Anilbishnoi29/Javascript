function createDeepCopy(input) {
    // base condition
    if (typeof input !== "object") return input;
    // BASE CASE when input is of instance Date
    if (input instanceof Date) return new Date(input.getTime());
    // copy
    let copy = Array.isArray(input) ? [] : {};
    for (let key in input) copy[key] = createDeepCopy(input[key]);
    return copy;
}

// test case
const NFTStore = {
    artPieces: [
        {
            pieceName: "Emo Flamingos",
            price: 30,
            ownerList: [
                {
                    name: "Fida Ernest",
                    userID: 23849,
                    purchaseDate: "09/13/2021",
                },
                {
                    name: "Eric Karger",
                    userID: 23510,
                    purchaseDate: "09/13/2021",
                },
            ],
        },
        {
            pieceName: "Where is my bit wallet",
            price: 100,
            ownerList: [],
        },
    ],
    storeCredits: 1000,
    printInfo() {
        console.log(this.artPieces,this.storeCredits);
    },
    dateTime: new Date()
};

const deepCopyNFTStore = createDeepCopy(NFTStore);
console.log(NFTStore);
console.log(deepCopyNFTStore);
console.log("date ----------");
console.log(NFTStore.dateTime,NFTStore.dateTime instanceof Date);
console.log(deepCopyNFTStore.dateTime,deepCopyNFTStore.dateTime instanceof Date);

console.log("Compare both objects ----------");
console.log(JSON.stringify(NFTStore) === JSON.stringify(deepCopyNFTStore));