function dbCall(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    console.log(`your id is #{id}`);
}

dbCall(3);
dbCall("thrity");
