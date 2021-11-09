import React, { useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  Textarea,
  FormMessage,
  FormButton,
  FormTitle,
  ImgSvg,
  Select,
  Option,
  SelectItem,
  InputFile,
} from "./AddStyles";
import { Container } from "../../globalStyles";
import validateForm from "./validateAdd";
import { addSvg } from "../../data/FormData";

const Add = () => {
  const [name, setName] = useState("");
  const [numero, setNumero] = useState("");
  const [address, setAddress] = useState("");
  const [tarifJ, setTarifJ] = useState("");
  const [tarifS, setTarifS] = useState("");
  const [tarifM, setTarifM] = useState("");
  const [caution, setCaution] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({
      name,
      numero,
      address,
      tarifJ,
      tarifS,
      tarifM,
      caution,
      message,
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName("");
    setNumero("");
    setAddress("");
    setTarifJ("");
    setTarifS("");
    setTarifM("");
    setCaution("");
    setMessage("");
    setError(null);
    setSuccess("Ajouter avec succès!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Name de product",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },

    {
      label: "Numéro du Téléphone",
      value: numero,
      onChange: (e) => setNumero(e.target.value),
      type: "number",
    },
    {
      label: "Address",
      value: address,
      onChange: (e) => setAddress(e.target.value),
      type: "text",
    },
    {
      label: "Tarif par Jour",
      value: tarifJ,
      onChange: (e) => setTarifJ(e.target.value),
      type: "number",
    },
    {
      label: "Tarif par Semaine",
      value: tarifS,
      onChange: (e) => setTarifS(e.target.value),
      type: "number",
    },
    {
      label: "Tarif par Moin",
      value: tarifM,
      onChange: (e) => setTarifM(e.target.value),
      type: "number",
    },
    {
      label: "Caution",
      value: caution,
      onChange: (e) => setCaution(e.target.value),
      type: "number",
    },
  ];
  return (
    <FormSection>
      <ImgSvg src={addSvg.img} alt="" />
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Ajouter un annonce</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>

                  <FormInput
                    type={el.type}
                    placeholder={`Entez Votre ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}
              <SelectItem>
                <Select>
                  <Option>ville</Option>
                  <Option>ville</Option>
                </Select>
                <Select>
                  <Option>ville</Option>
                  <Option>ville</Option>
                </Select>
              </SelectItem>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Entez Votre Description"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
                {" "}
              </Textarea>

              <InputFile type="file" accept="image/*" />

              <FormButton type="submit">Ajouter</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Add;
