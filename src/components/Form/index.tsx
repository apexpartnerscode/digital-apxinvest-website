'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Manrope } from 'next/font/google';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { z } from 'zod';

import styles from './styles.module.css';
import ModalConfirmation from '../ModalConfirmation';
import { useState } from 'react';

const manrope = Manrope({ subsets: ['latin'] })

interface IContactFormProps {
  professorId?: number | undefined;
  professorName?: string | undefined;
}


export default function Form({ professorId, professorName }: IContactFormProps) {
  const [showModal, setShowModal] = useState(false)

  const clientContacFormSchema = z.object({
    email: z.string()
      .nonempty('O e-mail é obrigatório')
      .toLowerCase()
      .email('Formato de e-mail inválido'),
    fullName: z.string()
      .nonempty('O campo nome é obrigatório')
      .min(8, 'O nome é muito curto')
      .refine((valor) => {
        const palavras = valor.split(' ');
        return palavras.length > 1 && palavras.every((palavra) => palavra.length > 0);
      }, {
        message: 'O nome completo deve incluir um espaço entre as palavras.'
      })
      .transform((fullName) => {
        return fullName.trim().split(' ').map(word => (word[0].toLocaleUpperCase().concat(word.substring(1)))).join(' ')
      }),
    phone: z.string()
      .nonempty('O telefone é obrigatório')
      .min(15, 'Formato do telefone é inválido'),
    'BTG Pactual': z.boolean(),
    'CLEAR Investimentos': z.boolean(),
    'XP Investimentos': z.boolean(),
    'GENIAL Investimentos': z.boolean(),
    'textOthersBrokers': z.string()
  })

  type clientContacForm = z.infer<typeof clientContacFormSchema> & IContactFormProps

  const { register, handleSubmit, formState: { errors } } = useForm<clientContacForm>({
    resolver: zodResolver(clientContacFormSchema)
  })

  async function handleSubmitForm(data: clientContacForm) {
    data.professorId = professorId
    data.professorName = professorName
    const response = fetch('/api/sendemail', {
      method: 'POST',
      body: JSON.stringify(data)
    })

  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)} className={`${manrope.className} ${styles.form}`}>
        <h2 className={styles.title}>Preencha as informações abaixo e tenha acesso a todos os nossos benefícios.</h2>
        <label className={styles.label}>
          <p className={styles.labelText}>Nome completo: *</p>
          <input type="text" className={styles.input} {...register("fullName", { required: true })} />
          {errors.fullName && <span className=''>{errors.fullName.message}</span>}
        </label>
        <label className={styles.label}>
          <p className={styles.labelText}>E-mail: * </p>
          <input type="email" className={styles.input} {...register("email", { required: true })} />
          {errors.email && <span className=''>{errors.email.message}</span>}
        </label>
        <label className={styles.label}>
          <p className={styles.labelText}>Celular/WhatsApp: * </p>
          <InputMask
            type="text"
            className={styles.input}
            {...register("phone", { required: true })}
            mask="(99) 99999-9999"
          />
          {errors.phone && <span className=''>{errors.phone.message}</span>}
        </label>
        <div>
          <p className={`${styles.label} ${styles.labelText}`}>Qual das corretoras abaixo você usa?</p>
          <div className={styles.checkBoxWrapper}>
            <label htmlFor="btg" className={styles.labelWrapper}>
              <input type="checkbox" className='' id="btg" {...register("BTG Pactual")} />
              <span className={styles.checkBoxText}>BTG Pactual</span>
            </label>
            <label htmlFor="clear" className={styles.labelWrapper}>
              <input type="checkbox" className='' id="clear" {...register("CLEAR Investimentos")} />
              <span className={styles.checkBoxText}>CLEAR Investimentos</span>
            </label>
            <label htmlFor="xp" className={styles.labelWrapper}>
              <input type="checkbox" className='' id="xp" {...register("XP Investimentos")} />
              <span className={styles.checkBoxText}>XP Investimentos</span>
            </label>
            <label htmlFor="genial" className={styles.labelWrapper}>
              <input type="checkbox" className='' id="genial" {...register("GENIAL Investimentos")} />
              <span className={styles.checkBoxText}>GENIAL Investimentos</span>
            </label>
          </div>
        </div>
        <label className={styles.label} htmlFor='textOthersBrokers'>
          <p className={styles.labelText}>Se você usa outras corretora,</p>
          <input type="text" className={styles.input} placeholder='conte para a gente aqui' id='textOthersBrokers' {...register("textOthersBrokers")} />
        </label>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
      <ModalConfirmation
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  )
}
