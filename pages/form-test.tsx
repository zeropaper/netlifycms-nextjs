import type { NextPage } from 'next'
import { useRef, FormEventHandler } from 'react'

type RenderProps = {
  handleChange: (...a: any[]) => any;
  success?: any
  error?: any
}

const FormTest: NextPage = () => {
  const name = 'some-form-name';
  const honeypotName = 'bot-field';
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    const { current: form } = formRef;
    if (!form) return;
    evt.preventDefault();

    let formData = new FormData(form);
    fetch(form.action || '/', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  }

  return (
    <form
      ref={formRef}
      name={name}
      onSubmit={handleSubmit}
      data-netlify
      data-netlify-honeypot={honeypotName}
    >
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