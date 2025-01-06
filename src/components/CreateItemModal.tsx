import { Alert, Modal, ModalProps, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import { Button, Loading, Input } from '.';
import { ContainerStyles, TextStyles } from '../assets/styles';
import { useItems } from '../hooks/useItems';
import { createItemSchema } from '../validation/createItem.validation';
import { CategoriesEnum } from '../enums/categories';
import { colors } from '../assets/colors';
import { IIncomingItem } from '../interfaces/item';

type Props = ModalProps & {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreateItemModal: React.FC<Props> = ({ visible, setVisible }) => {
  const [submitting, setSubmitting] = useState(false);
  const { loading, createItem } = useItems();

  const handleCreate = async (values: IIncomingItem) => {
    setSubmitting(true);
    try {
      await createItem(values);
    } catch (error: any) {
      Alert.alert('Error creating item', error);
    } finally {
      setSubmitting(false);
      setVisible(false);
    }
  };

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
            <>
              <Text style={TextStyles.title}>Add Item</Text>
              <Formik
                onSubmit={handleCreate}
                validationSchema={createItemSchema}
                initialValues={{
                  category: undefined,
                  name: '',
                  quantity: '',
                }}>
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
                      value={values.quantity.toString()}
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
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};
