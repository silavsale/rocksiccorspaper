const randomSignChoise = () => {
    const result = Math.floor(Math.random() * 3);
    switch(result) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
          break;
        case 2:
            return 'scissors'
          break;
        default:
          // code block
          return 'ERROR'
      }


} 

export default randomSignChoise