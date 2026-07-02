import re


def process(lines):
    for line in lines:
        m = re.match(r'\\w+=(\\d+)', line)
        if m:
            key, value = m.group(1), int(m.group(2))
            # TODO: process key and value
            print(f"Key: {key}, Value: {value}")
        else:
            # handle non-matching lines
            print(f"Unmatched line: {line}")


if __name__ == "__main__":
    import sys
    lines = sys.stdin.read().splitlines()
    process(lines)
