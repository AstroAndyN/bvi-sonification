const d3 = require('d3');
/* eslint max-len:0 */
/* eslint comma-spacing:0 */
/* eslint space-infix-ops:0 */

function blueToRed(min, max) {
  const d = (max - min) / 301;
  return d3.scale.threshold()
      .range(['#053061','#063263','#063264','#073466','#073467','#083669','#09376b','#0a396d','#0a396e','#0b3b6f','#0c3b71','#0d3d73','#0d3f75','#0e4076','#0f4177','#0f4279','#11437b','#11457c','#12467d','#13477f','#144881','#154a82','#154b84','#164c85','#174e87','#184f88','#184f89','#1a518c','#1a528d','#1b538e','#1c5590','#1d5691','#1e5793','#1f5994','#1f5b96','#205c97','#215d99','#225e9a','#23609b','#24619c','#25629e','#25639f','#2665a1','#2766a2','#2867a3','#296aa5','#2a6ba6','#2a6ca7','#2c6da9','#2c6fa9','#2e70ab','#2e72ac','#2f73ad','#3075af','#3175af','#3278b1','#3379b2','#347ab3','#357cb4','#367db5','#377fb6','#3780b7','#3882b9','#3982b9','#3a84bb','#3b86bb','#3c87bd','#3d88bd','#3e8abe','#3f8cbf','#408ec0','#408ec1','#4291c2','#4292c2','#4493c3','#4695c4','#4896c4','#4c97c5','#4e99c6','#509ac7','#549bc8','#569cc8','#589ec9','#5ba0ca','#5da0ca','#5fa1cb','#62a3cc','#64a4cd','#66a5cd','#6aa7ce','#6ba9cf','#6daacf','#70abd0','#72acd1','#74add1','#77afd2','#79b1d3','#7bb1d4','#7eb3d5','#80b5d5','#82b5d6','#85b7d7','#87b9d7','#89b9d8','#8bbbd9','#8ebcd9','#90bdda','#92bfda','#95c1dc','#97c2dc','#98c3dd','#9cc4de','#9ec6de','#9fc7df','#a3c8e0','#a5cae0','#a6cbe1','#aacce2','#accee2','#adcee3','#b0d0e4','#b3d1e4','#b4d3e5','#b7d4e5','#bad6e6','#bbd7e7','#bed8e7','#c1d9e8','#c3dbe9','#c4dce9','#c8ddea','#cadeeb','#ccdfeb','#cee1ec','#d1e2ed','#d3e3ed','#d5e5ee','#d8e7ef','#dae8ef','#dce9f0','#dfeaf1','#e1ebf1','#e3edf2','#e6eef3','#e9f0f3','#ebf0f4','#edf2f4','#f0f4f5','#f2f5f6','#f4f5f6','#f7f7f7','#f7f5f5','#f8f4f2','#f8f1ef','#f8efec','#f8eee9','#f8ece6','#f9eae4','#f9e8e1','#f9e6df','#f9e5dc','#f9e2da','#f9e0d7','#f9dfd4','#f9dcd1','#f9dbcf','#f9d9cc','#f9d7cb','#f9d5c8','#f9d4c5','#f9d2c3','#f8cfc0','#f8cebd','#f8ccbc','#f8cbb9','#f8c9b7','#f8c6b4','#f7c4b2','#f7c3af','#f7c0ad','#f6c0ac','#f6bea9','#f6bca7','#f5baa4','#f5b8a2','#f5b59f','#f4b59e','#f4b39c','#f3b099','#f3af97','#f3ad95','#f2ab92','#f1a990','#f1a78f','#f1a58d','#f0a38b','#f0a188','#efa086','#ef9e85','#ee9d83','#ed9a81','#ed997f','#ec967d','#ec957b','#eb937a','#ea9177','#ea9076','#e98d74','#e88b72','#e78a70','#e7886f','#e6866d','#e6846b','#e58369','#e48167','#e37f66','#e37d64','#e27b63','#e17961','#e0775f','#e0765e','#df735c','#de725a','#dd7059','#dd6f58','#db6c56','#db6b55','#da6953','#d96752','#d86450','#d7634f','#d6614e','#d55f4c','#d55e4c','#d35c4a','#d25949','#d15848','#d05647','#cf5446','#ce5345','#cc5144','#cb4f43','#ca4d42','#c84c41','#c74a41','#c64840','#c5473f','#c3463e','#c2433d','#c0423c','#bf403b','#be3f3a','#bc3d39','#bb3b39','#b93a38','#b73837','#b63736','#b53536','#b33335','#b23234','#b03134','#ae2f33','#ac2d32','#ab2c31','#a92b31','#a82930','#a6282f','#a5262f','#a2252e','#a1232e','#9f222d','#9d202c','#9b1f2c','#9a1d2b','#981c2b','#961b2a','#94192a','#921829','#911728','#901528','#8e1428','#8c1227','#8a1126','#881026','#860e26','#850d25','#820c25','#810b24','#7f0924','#7c0823','#7b0723','#790622','#760522','#750422','#730321','#710321','#6f0220','#6d0220','#6a0120','#69011f','#67001f'])
      .domain([min+1*d,min+2*d,min+3*d,min+4*d,min+5*d,min+6*d,min+7*d,min+8*d,min+9*d,min+10*d,min+11*d,min+12*d,min+13*d,min+14*d,min+15*d,min+16*d,min+17*d,min+18*d,min+19*d,min+20*d,min+21*d,min+22*d,min+23*d,min+24*d,min+25*d,min+26*d,min+27*d,min+28*d,min+29*d,min+30*d,min+31*d,min+32*d,min+33*d,min+34*d,min+35*d,min+36*d,min+37*d,min+38*d,min+39*d,min+40*d,min+41*d,min+42*d,min+43*d,min+44*d,min+45*d,min+46*d,min+47*d,min+48*d,min+49*d,min+50*d,min+51*d,min+52*d,min+53*d,min+54*d,min+55*d,min+56*d,min+57*d,min+58*d,min+59*d,min+60*d,min+61*d,min+62*d,min+63*d,min+64*d,min+65*d,min+66*d,min+67*d,min+68*d,min+69*d,min+70*d,min+71*d,min+72*d,min+73*d,min+74*d,min+75*d,min+76*d,min+77*d,min+78*d,min+79*d,min+80*d,min+81*d,min+82*d,min+83*d,min+84*d,min+85*d,min+86*d,min+87*d,min+88*d,min+89*d,min+90*d,min+91*d,min+92*d,min+93*d,min+94*d,min+95*d,min+96*d,min+97*d,min+98*d,min+99*d,min+100*d,min+101*d,min+102*d,min+103*d,min+104*d,min+105*d,min+106*d,min+107*d,min+108*d,min+109*d,min+110*d,min+111*d,min+112*d,min+113*d,min+114*d,min+115*d,min+116*d,min+117*d,min+118*d,min+119*d,min+120*d,min+121*d,min+122*d,min+123*d,min+124*d,min+125*d,min+126*d,min+127*d,min+128*d,min+129*d,min+130*d,min+131*d,min+132*d,min+133*d,min+134*d,min+135*d,min+136*d,min+137*d,min+138*d,min+139*d,min+140*d,min+141*d,min+142*d,min+143*d,min+144*d,min+145*d,min+146*d,min+147*d,min+148*d,min+149*d,min+150*d,min+151*d,min+152*d,min+153*d,min+154*d,min+155*d,min+156*d,min+157*d,min+158*d,min+159*d,min+160*d,min+161*d,min+162*d,min+163*d,min+164*d,min+165*d,min+166*d,min+167*d,min+168*d,min+169*d,min+170*d,min+171*d,min+172*d,min+173*d,min+174*d,min+175*d,min+176*d,min+177*d,min+178*d,min+179*d,min+180*d,min+181*d,min+182*d,min+183*d,min+184*d,min+185*d,min+186*d,min+187*d,min+188*d,min+189*d,min+190*d,min+191*d,min+192*d,min+193*d,min+194*d,min+195*d,min+196*d,min+197*d,min+198*d,min+199*d,min+200*d,min+201*d,min+202*d,min+203*d,min+204*d,min+205*d,min+206*d,min+207*d,min+208*d,min+209*d,min+210*d,min+211*d,min+212*d,min+213*d,min+214*d,min+215*d,min+216*d,min+217*d,min+218*d,min+219*d,min+220*d,min+221*d,min+222*d,min+223*d,min+224*d,min+225*d,min+226*d,min+227*d,min+228*d,min+229*d,min+230*d,min+231*d,min+232*d,min+233*d,min+234*d,min+235*d,min+236*d,min+237*d,min+238*d,min+239*d,min+240*d,min+241*d,min+242*d,min+243*d,min+244*d,min+245*d,min+246*d,min+247*d,min+248*d,min+249*d,min+250*d,min+251*d,min+252*d,min+253*d,min+254*d,min+255*d,min+256*d,min+257*d,min+258*d,min+259*d,min+260*d,min+261*d,min+262*d,min+263*d,min+264*d,min+265*d,min+266*d,min+267*d,min+268*d,min+269*d,min+270*d,min+271*d,min+272*d,min+273*d,min+274*d,min+275*d,min+276*d,min+277*d,min+278*d,min+279*d,min+280*d,min+281*d,min+282*d,min+283*d,min+284*d,min+285*d,min+286*d,min+287*d,min+288*d,min+289*d,min+290*d,min+291*d,min+292*d,min+293*d,min+294*d,min+295*d,min+296*d,min+297*d,min+298*d,min+299*d,min+300*d,min+301*d]);
}

module.exports = {
  blueToRed,
};
