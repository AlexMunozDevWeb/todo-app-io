import styled from "styled-components";

export const DarkModeStyles = styled.div`

  /* Light mode */
  /* &.light-mode{ */

    input[type="text"]{
      background-color: var(--very-light-grayish-blue);
      color: var(--dark-grayish-blue);
    }
    .title-button-wrapper > h1{ 
        color: var(--very-light-gray);
    }
    .form-wrapper{
      background-color: var(--very-light-grayish-blue);
  
      button.add-task{
        background-color: var(--very-light-grayish-blue);
        border: 2px solid var(--very-dark-grayish-blue);
      }
    }
  
    .main-content{
      background-color: var(--light-grayish-blue);
      .container .tasks-filter-container{
        .wrapper-tasks .form-wrapper.info-delete{
          background-color: var(--very-light-grayish-blue);
        }
        .wrapper-filters{
          background-color: var(--very-light-grayish-blue);
        }
        button.form-button{
          background-color: var(--very-light-grayish-blue);
          color: var(--dark-grayish-blue);
          &:hover{
            color: var(--very-dark-grayish-blue) ;
          }
        }
      }
    }
  
    .single-task{
      background-color: var(--very-light-grayish-blue);
      border-bottom: 1px solid var(--light-grayish-blue);
  
      label.img-box{
        background-color: var(--very-light-grayish-blue);
        border: 2px solid var(--dark-grayish-blue);
      }
    }

  /* } */

  /* Dark mode */
  &.dark-mode{

    input[type="text"]{
      background-color: var(--very-dark-desaturated-blue);
      color: var(--light-grayish-blue-hover);
    }
    .title-button-wrapper > h1{ 
        color: var(--very-light-gray);
    }
    .form-wrapper{
      background-color: var(--very-dark-desaturated-blue);
  
      button.add-task{
        background-color: var(--very-dark-desaturated-blue);
        border: 2px solid var(--very-dark-grayish-blue);
      }
    }

    .main-content{
      background-color: var(--very-dark-blue);
      .container .tasks-filter-container{
        .wrapper-tasks .form-wrapper.info-delete{
          background-color: var(--very-dark-desaturated-blue);
        }
        .wrapper-filters{
          background-color: var(--very-dark-desaturated-blue);
        }
        button.form-button{
          background-color: var(--very-dark-desaturated-blue);
          color: var(--dark-grayish-blue);
          &:hover{
            color: var(--light-grayish-blue-hover) ;
          }
        }
      }
    }

    .single-task{
      background-color: var(--very-dark-desaturated-blue);
      border-bottom: 1px solid var(--very-dark-grayish-blue);

      label.img-box{
        background-color: var(--very-dark-desaturated-blue);
        border: 2px solid var(--very-dark-grayish-blue);
      }
    }

  }
  
`;