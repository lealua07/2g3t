escrever = (msg) => alert (msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
div = (a,b) => a / b;
mult = (a,b) => a * b;
raiz = a => Match . sqrt (a);
eq2grau = (a,b,c) => {
    if(a == 0) return "Não é uma equação de Segundo Grau.";
   let delta = sub (mult(b.b),mult (4, mult (a,c)));
   if(delta < 0) return "não possui raiz real.";
}
escrever( soma(9,soma (6,1) ));