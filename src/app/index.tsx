import { CategoryButton } from "@/components/category-button"
import { Header } from "@/components/header"
import { Product } from "@/components/product"
import { CATEGORIES, MENU } from "@/utils/data/products"
import { useState } from "react"
import { FlatList, SectionList, Text, View } from "react-native"

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return (
    <View className="flex-1 pt-8">
      <Header
        title="Faça seu pedido"
        cartQuantityItems={3}
      />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />)}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Product data={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            className="text-xl text-white font-heading mt-8 mb-3"
          >
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  )
}