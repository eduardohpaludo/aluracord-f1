import React from 'react'
import appConfig from '../config.json'
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router'

function useFormik({
  initialValues
}) {
  const [values, setValues] = React.useState(initialValues)

  function handleChange(e){
    const fieldName = e.target.getAttribute('name')
    const value = e.target.value
    setValues({
      ...values,
      [fieldName]: value
    })
  }

  return {
    values,
    handleChange
  }
}

function Title(props) {
  const Tag = props.tag || 'h2'
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}
      </style>
    </>
  )
}

/*function HomePage() {
    return (
        <div>
            <GlobalStyle />
            <Title tag="h1">Boas vindas de volta!</Title>
            <h2>Aluracord - Alura Matrix</h2>
        </div>
    )
}

export default HomePage*/

export default function PaginaInicial() {

  const route = useRouter()
  const image = "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"

  const formik = useFormik({
    initialValues: {
      username: ''
    },
  })
  
  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://images.unsplash.com/photo-1563394779868-b02c503851fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            onSubmit={function(e){
              e.preventDefault();
              route.push('/chat')

            }}
            as="form"
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title tag="h2">Bem vindo, Piloto!</Title>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300], fontFamily: 'F1Regular' }}>
              {appConfig.name}
            </Text>
            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[600],
                  backgroundColor: appConfig.theme.colors.neutrals[800]
                },
              }}
              name="username"
              id="username"
              value={formik.values.username}
              //value={username}
              // onChange={function handler(e){
              //   const valor = e.target.value
              //   setUserName(valor)
              // }}
              onChange={formik.handleChange}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              
              src={
                formik.values.username.length > 2
                  ? `https://github.com/${formik.values.username}.png`
                  : image
              }
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px',
                fontFamily: 'F1Regular'
              }}
            >
            {formik.values.username.length > 2
              ? formik.values.username
              : ""
            }
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}