// // import { Text, TextInput, StyleSheet, View } from 'react-native';

// // export default function FormTextField({ label, errors = [], ...rest}) {
// //     return (
// //         <View>
// //             {label && <Text style={styles.label}>{label}</Text>}
// //             <TextInput style={styles.textInput} autoCapitalize="none" {...rest}/>
// //             {errors.map((err)=> {
// //                 return (
// //                 <Text key={err} style={styles.error}>
// //                     {err}
// //                     </Text>);
// //             })}
// //         </View>
// //     );
// // }


// const styles = StyleSheet.create({
//     label: {
//         color: "#334155",
//         fontweight: "500",
//     },
//     textInput: {
//         backgroundcolor: "#f1qf5f9",
//         height: 40,
//         marginTop: 4,
//         borderWidth: 1,
//         borderRadius: 4,
//         bordercolor: "#3cbd5e133",
//         padding: 10,
//     },
//     error: {
//         color: "red",
//         marginTop: 2,      
//     }
// });

import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

export default function FormTextField({ label, errors = [], ...rest }) {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput style={styles.textInput} autoCapitalize="none" {...rest} />
            {errors.length > 0 && errors.map((err, index) => (
                <Text key={index} style={styles.error}>
                    {err}
                </Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        color: "#334155",
        fontWeight: "500",
    },
    textInput: {
        backgroundColor: "#f1f5f9",
        height: 40,
        marginTop: 4,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#3cbd5e133",
        padding: 10,
    },
    error: {
        color: "red",
        marginTop: 2,
    }
});


// import React from 'react';
// import { Text, TextInput, StyleSheet, View } from 'react-native';


// export default function FormTextField({ label, errors = [], ...rest }) {
 

//   return (
//     <View>
//       {label && <Text style={[styles.label]}>{label}</Text>}
//       <TextInput style={[styles.textInput, { backgroundColor: theme.buttonBackground, color: theme.textColor, borderColor: theme.borderColor }]} autoCapitalize="none" {...rest} />
//       {errors.map((err) => (
//         <Text key={err} style={[styles.error, { color: theme.textColor }]}>
//           {err}
//         </Text>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   label: {
//     fontWeight: '500',
//   },
//   textInput: {
//     height: 40,
//     marginTop: 4,
//     borderWidth: 1,
//     borderRadius: 4,
//     padding: 10,
//   },
//   error: {
//     marginTop: 2,
//   },
// });
