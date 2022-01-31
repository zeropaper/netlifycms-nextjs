import type { NextPage } from 'next'

type RenderProps = {
  handleChange: (...a: any[]) => any;
  success?: any
  error?: any
}

const FormTest: NextPage = () => {
  const name = 'some-form-name';
  const honeypotName = 'bot-field';
  return (
    <form name={name} method="post" data-netlify>
      <input type="hidden" value={name} name="form-name" />
      <p hidden>
        <input type="text" name={honeypotName} />
      </p>

      <label htmlFor='varA'>Var A</label>
      <input type="text" name="varA" id="varA" placeholder="Var A" />

      <label htmlFor='varB'>Var B</label>
      <input type="text" name="varB" id="varB" placeholder="Var B" />

      <button type="submit">Submit</button>
    </form>
  )
}

export default FormTest