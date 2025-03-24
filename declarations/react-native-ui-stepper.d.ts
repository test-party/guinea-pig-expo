declare module 'react-native-ui-stepper' {
    import { ComponentType } from 'react';
    // Basic type assumption based on typical stepper component usage
    interface UIStepperProps {
      initialValue?: number;
      minimumValue?: number;
      maximumValue?: number;
      onValueChange?: (value: number) => void;
      [key: string]: any; // Allow additional props if needed
    }
    const UIStepper: ComponentType<UIStepperProps>;
    export default UIStepper;
  }