import { forwardRef, Provider } from "@angular/core";
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from "@angular/forms";


export abstract class AbstractValueAccessor implements ControlValueAccessor {
    protected innerValue: unknown = '';
    touched = false;
    disabled = false;

    //disable eslint on below lines if needed
    onChange = (_: unknown): void => {}
    OnTouched = (): void => {}

    get value(): unknown {
        return this.innerValue
    }

    set value(newValue: unknown) {
        if(newValue !== this.innerValue) {
            this.innerValue = newValue
            this.onChange(newValue)
        }
    }

    writeValue(value: unknown): void {
        this.innerValue = value
    }

    registerOnChange(fn: (_: unknown) => void ): void {
        this.onChange = fn
    }

    registerOnTouched(fn: () => void ): void {
        this.OnTouched = fn
    }

    markAsTouched(): void {
        if(!this.touched) {
            this.OnTouched()
            this.touched = true
        }
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled
    }

}

export function makeProvider(type: unknown): Provider {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => type),
        multi: true
    }
}