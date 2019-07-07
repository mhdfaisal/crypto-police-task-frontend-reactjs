import React from "react";
import HeroHeading from "../widgets/HeroHeading/HeroHeading";
import HeroSubheading from "../widgets/HeroSubHeading/HeroSubHeading";
import styles from "./MainFormContainer.module.css";
import HorizontalStepper from "../widgets/HorizontalStepper/HorizontalStepper";
import RegisterForm from "../RegisterForm/RegisterForm";
import SecurityCodeForm from "../SecurityCodeForm/SecurityCodeForm";
import ThankYouPage from "../ThankYouPage/ThankYouPage";
import UserProfileForm from "../UserProfileForm/UserProfileForm";
import validate from "../../utility/validate";

class MainFormContainer extends React.Component {
  state = {
    steps: [
      { title: "Register" },
      { title: "Security Code" },
      { title: "User profile" },
      { title: "Thank you" }
    ],
    activeStep: 1,
    formData: {
      email: {
        value: "",
        validationRules: {
          required: true,
          isEmail: true
        },
        touched: false,
        valid: false,
        type: "email",
        element: "input",
        placeholder: "Enter your email",
        name: "email"
      },
      intlPhoneInput: {
        value: "",
        validationRules: {
          required: true,
          isPhoneNumber: true
        },
        valid: false,
        placeholder: "",
        touched: false,
        element: "intlPhoneInput",
        name: "phone"
      },
      category: {
        element: "select",
        options: [
          { name: "Frontend", value: "frontend" },
          { name: "Backend", value: "backend" },
          { name: "DevOps", value: "devops" }
        ],
        value: "",
        validationRules: {
          required: true
        },
        valid: false,
        name: "category",
        touched: false
      },
      password: {
        element: "input",
        type: "password",
        value: "",
        showPassword: false,
        valid: false,
        validationRules: {
          required: true
        },
        name: "password",
        placeholder: "Enter your password",
        touched: false
      },
      agreement: {
        element: "checkbox",
        isChecked: false,
        value: "",
        valid: false,
        validationRules: {
          // isAgreed:true,
          required: true
        },
        touched: false,
        name: "agreement",
        labelText: "Agree with terms and conditions"
      }
    }
  };

  updateStateAfterChange = (e, id, phoneNumber = null) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [id]: {
          ...this.state.formData[id],
          value: phoneNumber ? phoneNumber : e.target.value,
          touched: true,
          valid: validate(
            e.target.value,
            this.state.formData[id].validationRules
          )
        }
      }
    });
  };

  handleChange = (e, id, phoneObj = {}) => {
    if (id === "intlPhoneInput") {
      let { countryData, value } = phoneObj;
      let phoneNumber = `+${countryData.dialCode}-${value}`;
      //faking the event object to use the same function
      this.updateStateAfterChange(
        { target: { value: value } },
        id,
        phoneNumber
      );
    }
    if (id === "agreement") {
      this.setState(prevState => {
        const isChecked = prevState.formData.agreement.isChecked;
        return {
          formData: {
            ...prevState.formData,
            agreement: {
              ...prevState.formData.agreement,
              isChecked: !isChecked,
              value: !isChecked ? "agreed" : "",
              valid: validate(
                !isChecked ? "agreed" : "",
                this.state.formData.agreement.validationRules
              ),
              touched: true
            }
          }
        };
      });
    } else {
      this.updateStateAfterChange(e, id);
    }
  };

  handleShowPasswordClick = () => {
    this.setState(prevState => {
      const showPassword = prevState.formData.password.showPassword;
      return {
        formData: {
          ...prevState.formData,
          password: {
            ...prevState.formData.password,
            showPassword: !showPassword
          }
        }
      };
    });
  };

  renderHeroContent = () => {
    return (
      <>
        <HeroHeading style={{ fontSize: "1.8rem" }} />
        <HeroSubheading style={{ fontSize: "1.1rem", marginTop: "1%" }} />
      </>
    );
  };

  renderStepForm = () => {
    const { activeStep, formData } = this.state;
    switch (activeStep) {
      case 1:
        return (
          <RegisterForm
            email={formData.email}
            phone={formData.intlPhoneInput}
            category={formData.category}
            password={formData.password}
            agreement={formData.agreement}
            handleChange={this.handleChange}
            handleShowPasswordClick={this.handleShowPasswordClick}
          />
        );
      case 2:
        return <SecurityCodeForm />;
      case 3:
        return <UserProfileForm />;
      case 4:
        return <ThankYouPage />;
      default:
        return null;
    }
  };

  render() {
    const { steps, activeStep } = this.state;
    return (
      <div className={styles.mainFormContainerBox}>
        <div className="my-5 text-center">{this.renderHeroContent()}</div>
        <HorizontalStepper
          steps={steps}
          activeTitleColor="#0b0ba8"
          completeBarColor="#5096FF"
          defaultBorderWidth={50}
          activeStep={activeStep - 1}
        />
        <form>{this.renderStepForm()}</form>
      </div>
    );
  }
}
export default MainFormContainer;
