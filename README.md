# currencyInput

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
