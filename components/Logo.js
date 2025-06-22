import { StyleSheet, View } from "react-native";
import logoImage from "../assets/logo/aniwheel-a87352d07ff79e922e5afbc8775f603b.webp";
import { Image } from "expo-image";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { alignItems:'center' },
  logo: { width: 100, height: 100, resizeMode: "contain" },
});

export default Logo;
