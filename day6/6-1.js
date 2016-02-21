function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        // Code Added
        var spring = true;
        var height = 1;
        while(n > 0){
            if(spring){
                height *= 2;
                spring = false;
            } else{
                height += 1;
                spring = true;
            }
            n--;
        }
        console.log(height);
    }
}
