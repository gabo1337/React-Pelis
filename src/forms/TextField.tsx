import { ErrorMessage, Field } from "formik";
import React from "react";
import "./styles.css";

export default function TextField(props: textFieldProps) {
	return (
		<div className="mb-3">
			<label htmlFor={props.field}>{props.displayName}</label>
			<Field
				type={props.type}
				name={props.field}
				id={props.field}
				className="form-control label_form"
			/>
			<ErrorMessage name={props.field}>
				{(msg) => <div className="text-danger">{msg}</div>}
			</ErrorMessage>
		</div>
	);
}

interface textFieldProps {
	field: string;
	displayName: string;
	type: "text" | "password";
}

TextField.defaultProps = {
	type: "text",
};
