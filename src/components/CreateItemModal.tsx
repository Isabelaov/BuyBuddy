import { Alert, Modal, ModalProps, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { Button, Loading, Input, CategoriesPicker, Anchor } from '.';
import { ContainerStyles, ModalStyles, TextStyles } from '../assets/styles';
import { useItems } from '../hooks/useItems';
import { createItemSchema } from '../validation/createItem.validation';
import { IIncomingItem } from '../interfaces/item';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/rootStack';

type NavigationProp = NativeStackNavigationProp<RootStackParams, 'Home'>;

type Props = ModalProps & {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: NavigationProp;
  id?: number;
};

export const CreateItemModal: React.FC<Props> = ({
  visible,
  setVisible,
  navigation,
  id,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const { loading, createItem, items, updateItem, deleteItem } = useItems();

  const initialValues: IIncomingItem = id
    ? { ...items[id] }
    : {
        category: undefined,
        name: '',
        quantity: '',
      };

  const handle = async (values: IIncomingItem) => {
    setSubmitting(true);
    try {
      if (id) {
        updateItem(id, values);
      } else {
        await createItem(values);
      }
    } catch (error: any) {
      Alert.alert('Error handling item', error);
    } finally {
      setSubmitting(false);
      setVisible(false);
      navigation.replace('Home');
    }
  };

  const handleDelete = async () => {
    try {
      deleteItem(id!);
    } catch (error: any) {
      Alert.alert('Error deleting item');
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
      <View style={ModalStyles.modalContainer}>
        <View style={ModalStyles.modalContent}>
          {loading || submitting ? (
            <Loading />
          ) : (
            <>
              <Text style={TextStyles.title}>{id ? 'Update' : 'Add'} Item</Text>
              <Formik
                onSubmit={handle}
                validationSchema={createItemSchema}
                initialValues={initialValues}>
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

                    <CategoriesPicker
                      onBlur={handleBlur('quantity')}
                      selectedValue={values.category}
                      onValueChange={handleChange('category')}
                    />

                    <View style={ContainerStyles.bySide}>
                      <Button
                        onPress={() => handleSubmit()}
                        backgroundPrimary={false}
                        text="Save"
                        disabled={submitting}
                      />
                    </View>

                    <Anchor
                      text="Cancel"
                      onPress={() => {
                        handleDelete();
                        setVisible(false);
                        return;
                      }}
                    />
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
