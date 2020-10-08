import React, {} from 'react';
import {FormGroup,Input,Form,Col,} from 'reactstrap';
import {Formik} from 'formik';
import apiSearch,{cleanData} from '../../../conf/movie-api'

const Search = (props) => {

    const submit = (values,action) => {

        let url = ''

       const query = '?'+Object.keys(values).map(k => `${k}=${values[k]}&`).join('')
     
       apiSearch.get('/search/movie'+query).then(response => {
              console.log('responce',response);
              url = response.config.url
              return response.data.results
          }).then(movie => {
           const movies = cleanData(movie);
           props.getSearch(movies,false,url);
           action.setSubmitting(false)

       })
    }

    const onValidate = (values) => {
       
        const errors = {}
        
     
            if(!values.query || !values.query.trim()){
                errors.query = 'le champ est vide';
            }else{
                if(values.query.length < 3){
                    errors.query = '3 carac minimum'
                }else{
                   
                }
            }
        

        return errors;
    }

    return(

            <Col xs="12">

               <Col xs="12">
                    <Formik validate={onValidate} onSubmit={submit} initialValues={{query:'',lang:'en-US'}} validateOnChange={true} validateOnBlur={true} >
                        {({handleSubmit,handleBlur,handleChange,errors,isSubmitting}) => {
                             return(
                                <Form onSubmit={handleSubmit} className="row">
                                    <Col xs="10">
                                        <FormGroup className="row-form">
                                            <Input name="query" onChange={handleChange} onBlur={handleBlur} placeholder="Rechercher un film..." type="text" className="input"/>
                                            <div className="input-group-prepend">
                                            <button disabled={isSubmitting} type="submit" className="btn btn-primary input-group-text search-btn">
                                                <i className="fa fa-search"></i>
                                            </button>
                                            </div>

                                            
                                        </FormGroup>
                                    </Col>
                                   <Col xs="2">
                                    <FormGroup>
                                            <select className="form-control" name="lang" onChange={handleChange}>
                                                <option value="en-US">Anglais</option>
                                                <option value="fr-FR">Français</option>
                                            </select>
                                        </FormGroup>
                                   </Col>
                                   {errors && errors.query ? (
                                                <p className=" col-12 text-danger">
                                                    {errors.query}
                                                </p>
                                            ) : null}
                                </Form>
                             )
                        }}
                    </Formik>
               </Col>
            
            </Col>
    )

}

export default Search;