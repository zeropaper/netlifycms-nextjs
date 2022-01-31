import type { NextPage } from 'next'
import { NetlifyForm as Original, Honeypot } from 'react-netlify-forms'

type RenderProps = {
  handleChange: (...a: any[]) => any;
  success?: any
  error?: any
}

const FormTest: NextPage = () => {
  const name = 'form-name';
  const honeypotName = 'bot-field';
  const action = null;
  return (
    <Original name={name} action={action} honeypotName={honeypotName}>
      {({ handleChange, success, error }: RenderProps) => (
        <>
          <Honeypot />

          {console.info('form render', { success, error, handleChange })}
          {success && (<>Success</>)}
          {error && (<>Error</>)}

          <label htmlFor='varA'>Var A</label>
          <input type="text" name="varA" id="varA" placeholder="Var A" />

          <label htmlFor='varB'>Var B</label>
          <input type="text" name="varB" id="varB" placeholder="Var B" />

          <button name="submit" type="submit" value="submit1">1</button>
          <button name="submit" type="submit" value="submit2">2</button>

          <button type="submit">Submit</button>
        </>
      )}
    </Original>
  )
}

export default FormTest