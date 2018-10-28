import React from 'react';


const FormFields = (props) => {


  const renderFields = () => {
    const formArray = [];

    for(let elements in props.formData) {
      formArray.push({
        id: elements,
        settings: props.formData[elements]
      })
    }
    
    return formArray.map((item, i) => (
      <div key={i} className="form_element">
        {renderTemplates(item)}
      </div>
    ))
  }

  const showLabel = (show, labelText) => {
    return show ? 
      <label>{labelText}</label> :
      null
  }

  const onChangeHandler = (event, id, blur) => {
    const newState = props.formData;
    newState[id].value = event.target.value;

    if(blur) {
      let validateData = validate(newState[id]);
      newState[id].valid = validateData[0];
      newState[id].validationMessage = validateData[1];
    }
    newState[id].touched = blur;

    props.change(newState);
  }

  const validate = (element) => {
    let error = [true, ''];

    if(element.validation.minLen) {
      const valid = element.value.length >= element.validation.minLen;
      const message = `${!valid ? 'Must be greater than ' + element.validation.minLen : ''}`;

      error = !valid ? [valid, message] : error
    }

    if(element.validation.required) {
      const valid = element.value.trim() !== '';
      const message = `${ !valid ? 'This field is required' : '' }`

      error = !valid ? [valid, message] : error
    }

    return error;
  }

  const showValidationMessage = (data) => {
    let errorMessage = null;

    if(data.validation && !data.valid) {
      errorMessage = (
        <div className="label_error">
          {data.validationMessage}
        </div>
      )
    }
    return errorMessage;
  }

  const renderTemplates = (data) => {
    let formTemplate = '';
    let values = data.settings;


    switch(values.element) {
      case ('input'):
        formTemplate = (
          <div>
            { showLabel(values.label, values.labelText) }
            <input
              {...values.config}
              value={values.value}
              onBlur={(event, id) => onChangeHandler(event, data.id, true)}
              onChange={(event, id) => onChangeHandler(event, data.id, false)}
            />
            {showValidationMessage(values)}
          </div>
        )
      break;
      case ('textarea'):
        formTemplate = (
          <div>
            { showLabel(values.label, values.labelText) }
            <textarea
              {...values.config}
              value={values.value}
              onChange={(event, id) => onChangeHandler(event, data.id)}
            />
          </div>
        )
      break;
      case ('select'):
        formTemplate = (
          <div>
            { showLabel(values.label, values.labelText) }
            <select
              {...values.config}
              name={values.config.name}
              onChange={(event, id) => onChangeHandler(event, data.id)}
            >
              { values.config.options.map((option, i) => (
                <option key={i} value={option.value}>{option.text}</option>
              )) }
            </select>
          </div>
        )
      break;
      default:
        formTemplate = null
    }

    return formTemplate;
  }

  return (
    <div>
      {renderFields()}
    </div>
  )
}

export default FormFields;