import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Modal from '@bit/datagir.simulateurs.modal'

const Title = styled.h2``
const Text = styled.p``
export default function CO2EModal() {
  const { CO2E, setCO2E } = useContext(ModalContext)

  return (
    <Modal open={CO2E} setOpen={setCO2E}>
      <Title>
        L'équivalent CO<sub>2</sub> ou CO<sub>2</sub> équivalent (CO<sub>2</sub>
        e)
      </Title>
      <Text>
        Les différents GES anthropiques ont un impact plus ou moins important
        sur le climat. Afin d’être comparés, les émissions des différents GES
        peuvent être exprimés en CO<sub>2</sub>e (équivalent CO<sub>2</sub>).
        Pour cela, le PRG (potentiel de réchauffement global) à 100 ans est
        l'indicateur classique retenu dans la plupart des rapports et traités
        internationaux. Par exemple, 1 kg de méthane (CH4) réchauffera autant
        l’atmosphère que 28 à 30 kg de CO<sub>2</sub> au cours du siècle qui
        suit leur émission.
      </Text>
      <Text>
        <b>
          Attention, cette valeur est donnée au kg de produit, et non à l'unité
          !
        </b>
      </Text>
    </Modal>
  )
}
