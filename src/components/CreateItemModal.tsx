import { Modal, ModalProps, View } from 'react-native';
import React, { useState } from 'react';
import { ContainerStyles, TextStyles } from '../assets/styles';
import { useItems } from '../hooks/useItems';
import { Formik } from 'formik';
import { Button, Loading } from '.';
import { createItemSchema } from '../validation/createItem.validation';
import { Input } from './Input';
import { Picker } from '@react-native-picker/picker';
import { CategoriesEnum } from '../enums/categories';
import { colors } from '../assets/colors';

type Props = ModalProps & {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreateItemModal: React.FC<Props> = ({ visible, setVisible }) => {
  const [submitting, setSubmitting] = useState(false);
  const { loading, createItem } = useItems();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {
        setVisible(false);
        return;
      }}>
      <View style={ContainerStyles.modalContainer}>
        <View style={ContainerStyles.modalContent}>
          {loading || submitting ? (
            <Loading />
          ) : (
            <Formik
              onSubmit={() => console.log('uwu')}
              validationSchema={createItemSchema}
              initialValues={{ category: '', name: '', quantity: '' }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <Input
                    placeholder="Name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    error={touched.name ? errors.name : undefined}
                  />

                  <Input
                    placeholder="Quantity"
                    onChangeText={handleChange('quantity')}
                    keyboardType="numeric"
                    onBlur={handleBlur('quantity')}
                    value={values.quantity}
                    error={touched.quantity ? errors.quantity : undefined}
                  />

                  <View style={ContainerStyles.pickerContainer}>
                    <Picker
                      onBlur={handleBlur('quantity')}
                      mode="dropdown"
                      dropdownIconColor={colors.primary}
                      style={ContainerStyles.picker}
                      selectedValue={values.category}
                      onValueChange={handleChange('category')}>
                      <Picker.Item
                        style={ContainerStyles.pickerItem}
                        key={'uwu'}
                        label={'Select category'}
                      />

                      {Object.values(CategoriesEnum).map(category => (
                        <Picker.Item
                          style={ContainerStyles.pickerItem}
                          key={category}
                          label={category}
                          value={category}
                        />
                      ))}
                    </Picker>
                  </View>

                  <View style={ContainerStyles.bySide}>
                    <Button
                      onPress={() => handleSubmit()}
                      backgroundPrimary={false}
                      text="Save"
                      disabled={submitting}
                    />

                    <Button
                      text="Cancel"
                      onPress={() => {
                        setVisible(false);
                        return;
                      }}
                    />
                  </View>
                </>
              )}
            </Formik>
          )}
        </View>
      </View>
    </Modal>
  );
};
