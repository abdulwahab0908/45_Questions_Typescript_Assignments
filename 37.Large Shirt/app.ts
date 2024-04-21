function make_shirt (size  :string = 'large',text : string = 'I loved typescript' ): void {
    console.log(`You have a order ${size} shirt that says ${text}`)

}
make_shirt();
make_shirt('medium')

make_shirt('small','I need a big shirt to wear');

