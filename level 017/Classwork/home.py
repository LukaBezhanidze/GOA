
def word_search(query, seq):
    result = []
    for item in seq:
        if query.lower() in item.lower():
            result.append(item)
    return result if result else ["None"]