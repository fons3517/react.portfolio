import React from 'react';
import { emailValidation } from '../utils/helper';
import { Form, Button } from 'react-bootstrap';

export default function FormState() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [form, setForm] = useState('');


}