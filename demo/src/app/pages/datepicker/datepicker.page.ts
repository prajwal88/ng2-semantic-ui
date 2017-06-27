import { Component } from "@angular/core";
import { ApiDefinition } from "../../components/api/api.component";

const exampleStandardTemplate = `
<div class="ui form">
    <div class="field">
        <label>Date</label>
        <div class="ui left icon input">
            <i class="calendar icon"></i>
            <input suiDatepicker
                   [(ngModel)]="date"
                   [pickerFirstDayOfWeek]="firstDayOfWeek">
        </div>
    </div>
    <div class="field">
        <label>First Day of the Week</label>
        <input type="number" [(ngModel)]="firstDayOfWeek" min="0" max="6">
    </div>
    <p>{{ date }}</p>
</div>
`;

@Component({
    selector: "demo-page-datepicker",
    templateUrl: "./datepicker.page.html"
})
export class DatepickerPage {
    public api:ApiDefinition = [
        {
            selector: "[suiDatepicker]",
            properties: [
                {
                    name: "pickerMode",
                    type: "DatepickerMode",
                    description: "Specifies the mode for the datepicker. Options are: <code>datetime</code>, " +
                                 "<code>date</code>, <code>time</code>, <code>month</code> & <code>year</code>.",
                    defaultValue: "datetime"
                },
                {
                    name: "pickerMaxDate",
                    type: "Date",
                    description: "Sets the maximum date that can be selected by the datepicker."
                },
                {
                    name: "pickerMinDate",
                    type: "Date",
                    description: "Sets the minimum date that can be selected by the datepicker."
                },
                {
                    name: "pickerFirstDayOfWeek",
                    type: "number",
                    description: "Sets the first day of the week when displaying dates in a month. " +
                                 "Can be from <code>0</code> (Sunday) to <code>6</code> (Saturday).",
                    defaultValue: "0"
                },
                {
                    name: "pickerPlacement",
                    type: "PopupPlacement",
                    description: "Sets the placement of the datepicker.",
                    defaultValue: "bottom left"
                },
                {
                    name: "pickerTransition",
                    type: "string",
                    description: "Sets the transition used when displaying the datepicker.",
                    defaultValue: "scale"
                },
                {
                    name: "pickerTransitionDuration",
                    type: "number",
                    description: "Sets the duration for the datepicker transition.",
                    defaultValue: "200"
                },
                {
                    name: "ngModel",
                    type: "Date",
                    description: "Bind the selected date to the value of the provided variable."
                }
            ],
            events: [
                {
                    name: "pickerSelectedDateChange",
                    type: "Date",
                    description: "Fires whenever the selected date is changed. The selected date is passed as <code>$event</code>."
                },
                {
                    name: "ngModelChange",
                    type: "Date",
                    description: "Fires whenever the selected date is changed. <code>[(ngModel)]</code> syntax is supported."
                }
            ]
        },
        {
            selector: "input[suiDatepicker]",
            properties: [
                {
                    name: "pickerUseNativeOnMobile",
                    type: "boolean",
                    description: "Whether the datepicker should use the native HTML5 pickers when on a mobile device.",
                    defaultValue: "true"
                }
            ]
        }
    ];
    public exampleStandardTemplate:string = exampleStandardTemplate;
}

@Component({
    selector: "example-datepicker-standard",
    template: exampleStandardTemplate
})
export class DatepickerExampleStandard {
    public firstDayOfWeek:number = 0;
}

export const DatepickerPageComponents = [DatepickerPage, DatepickerExampleStandard];