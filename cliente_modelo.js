class ClienteModelo{
 constructor(datonombre,datoapellido,datoroll){
    this.Nombre=datonombre;
    this.Apellido=datoapellido;
    this.Roll;
 }
 get_nombre(){
    return this.Nombre
 }
 set_nombre(nuevo_dato){
    this.nombre=nuevo_dato
 }
 get_apellido(){
    return this.Apellido
 }
 ser_apellido(nuevo_dato){
    this.apellido=nuevo_dato
 }
 get_roll(){
    this.Roll
 }
 set_roll(nuevo_dato){
    this.roll=nuevo_dato
 }
}