import { Link } from "expo-router";
import React, { useEffect } from "react";
import { Text, StatusBar, SafeAreaView } from "react-native";
import { loadAsync } from "expo-font";
import SignUpPage from "./UnauthPages/SignUp";

export default function Page() {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await loadAsync({
        lobster: require("../../assets/fonts/Lobster-Regular.ttf"),
        pacifico: require("../../assets/fonts/Pacifico-Regular.ttf"),
      });
    };

    loadFonts()
      .then(() => {
        setPageLoaded(true);
      })
      .catch((e) => console.log(e));
  });

  if (!pageLoaded) return undefined;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
        marginTop: StatusBar.currentHeight,
      }}
    >
      {/* <Link href="/UnauthPages/SignIn"><Text>sign in</Text></Link> */}
      <SignUpPage />
    </SafeAreaView>
  );
}
