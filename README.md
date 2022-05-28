# currencyInput

This is a function that changes an input to decimal format. It's very simple. You can edit it as you like and need

### React
If you are using react, you can use this function in any input form, like this:

```
import React, { useState } from 'react'
import {toDecimal} from './currencyInput'

function foo(props){
   const [currency, setCurrency] = useState(0)
   //...

   const handleInputCurrency(value){
      setCurrency(toDecimal(value))
   }
   
   return (
      <input type="text" value={currency} onChange={(e) => handleInputCurrency(e.target.value)} />
   )
}
```

### React
If you are using vue you can import this function and manipulate the value in 'watch'.
```
import {toDecimal} from './currencyInput'

export default{
   data(){
      return {
         currency: 0
      }
   },
   watch: {
      currency(value){
         this.currency = toDecimal(value)
      }
   }
}
```

